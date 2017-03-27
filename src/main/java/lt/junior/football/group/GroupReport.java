package lt.junior.football.group;

import lt.junior.football.score.ScoreEntity;
import lt.junior.football.team.TeamReport;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Pavel on 2017-03-21.
 */
public class GroupReport {

    private Long id;
    private String name;
    private String tournamentName;
    private Long tournamentId;
    private Long numberOfGames;
    private Long numberOfTeams;
    private List<TeamReport> teams;

    public GroupReport() {
    }

    public GroupReport(GroupEntity group) {
        this.id = group.getId();
        this.name = group.getName();
        this.tournamentId = group.getTournament().getId();
        this.tournamentName = group.getTournament().getName();
        if(group.getGames() != null){
            this.numberOfGames = group.getGames().stream().count();
            this.numberOfTeams = group.getGames()
                    .stream()
                    .flatMap(g->g.getScores().stream())
                    .map(ScoreEntity::getTeam)
                    .distinct()
                    .count();
            this.teams = group.getGames()
                    .stream()
                    .flatMap(g->g.getScores().stream())
                    .map(ScoreEntity::getTeam)
                    .distinct()
                    .map(TeamReport::new)
                    .collect(Collectors.toList());
        }
    }

    public List<TeamReport> getTeams() {
        return teams;
    }

    public void setTeams(List<TeamReport> teams) {
        this.teams = teams;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTournamentName() {
        return tournamentName;
    }

    public void setTournamentName(String tournamentName) {
        this.tournamentName = tournamentName;
    }

    public Long getTournamentId() {
        return tournamentId;
    }

    public void setTournamentId(Long tournamentId) {
        this.tournamentId = tournamentId;
    }

    public Long getNumberOfGames() {
        return numberOfGames;
    }

    public void setNumberOfGames(Long numberOfGames) {
        this.numberOfGames = numberOfGames;
    }

    public Long getNumberOfTeams() {
        return numberOfTeams;
    }

    public void setNumberOfTeams(Long numberOfTeams) {
        this.numberOfTeams = numberOfTeams;
    }
}
