package lt.junior.football.tournament;

import lt.junior.football.score.ScoreEntity;
import lt.junior.football.game.GameEntity;
import lt.junior.football.game.GameRepository;
import lt.junior.football.group.GroupEntity;
import lt.junior.football.group.GroupRepository;
import lt.junior.football.score.ScoreRepository;
import lt.junior.football.team.TeamEntity;
import lt.junior.football.team.TeamRepository;
import lt.junior.helpers.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Pavel on 2017-03-21.
 */

@Service
public class TournamentService {
    @Autowired
    TeamRepository teamRepository;
    @Autowired
    TournamentRepository repository;
    @Autowired
    GroupRepository groupRepository;
    @Autowired
    GameRepository gameRepository;
    @Autowired
    ScoreRepository scoreRepository;

    @Transactional
    public TournamentEntity save(TournamentEntity tournament) {
        return repository.save(tournament);
    }

    public List<TournamentReport> findAll() {
        return repository.findAll().stream().map(TournamentReport::new).collect(Collectors.toList());
    }

    public TournamentReport findById(Long id) {
        return new TournamentReport(repository.finById(id));
    }

    @Transactional
    public TournamentReport generate(Long id) {
        TournamentEntity te = repository.finById(id);
        List<TeamEntity> allTeams = teamRepository.findAll();
        List<TeamEntity> teams = allTeams.stream()
                .filter(t->{
                    boolean isMinAgeOk = t.getPlayers().stream().allMatch(p -> te.getAgeMin() < DateUtils.getAge(p.getBirthDate()));
                    boolean isMaxAgeOk = t.getPlayers().stream().allMatch(p -> (te.getAgeMax()+1) > DateUtils.getAge(p.getBirthDate()));
                    System.out.println(t.getName() + " passed: " + (isMaxAgeOk && isMinAgeOk));
                    return isMaxAgeOk && isMinAgeOk;
                })
                .collect(Collectors.toList());

        int numberOfTeams = teams.size();
        int numberTeamsInGroup = 4;
        int leftTeams = Math.floorMod(numberOfTeams, numberTeamsInGroup);
        int numberOfGroups = (numberOfTeams-leftTeams) / (numberTeamsInGroup);
        String groupNames = "ABCDEFGHIJKLMNOPSTUVXYZ";
        for (int i = 0; i < numberOfGroups; i++) {
//            System.out.println(groupNames.substring(i,i+1));
            GroupEntity group = new GroupEntity();
            String groupName = groupNames.substring(i, i + 1);
            group.setName(groupName);
            group.setTournament(te);
            int additionalTeam = 0;
            if (leftTeams > 0){
                additionalTeam = 1;
                leftTeams--;
            } else {
                additionalTeam = 0;
            }
            List<TeamEntity> teamsInGroup = teams.subList(i * numberTeamsInGroup, ((i + 1) * numberTeamsInGroup)+additionalTeam);
            Long savedGroupId = groupRepository.save(group).getId();
            generateGames(teamsInGroup, savedGroupId);
        }
        return new TournamentReport(te);
    }

    private void generateGames(List<TeamEntity> teams, Long savedGroupId) {
        int size = teams.size();
        int numberOfGames = 0;
        for (int i = 0; i < size; i++) {
            numberOfGames = numberOfGames + i;
        }
//        System.out.println("Number of games in this group " + numberOfGames);
        Long counter = 1L;
        for (int i = 0; i < teams.size(); i++) {
            for (int j = i; j < teams.size()-1; j++) {
//                System.out.println((i+1)+ " - " + (j+2));
                GameEntity game = new GameEntity();
                game.setNumber(counter);
                game.setGroup(groupRepository.findById(savedGroupId));
                Long gameId = gameRepository.save(game).getId();
                ScoreEntity s1 = new ScoreEntity(teams.get(i),gameRepository.findById(gameId));
                ScoreEntity s2 = new ScoreEntity(teams.get(j+1),gameRepository.findById(gameId));
                scoreRepository.save(s1);
                scoreRepository.save(s2);
//                System.out.println(game.toString());
                counter++;
            }
        }
    }
}
