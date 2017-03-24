package lt.junior.football.group;

import lt.junior.football.game.GameReport;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Pavel on 2017-03-23.
 */
public class GroupDetailsReport {
    private Long id;
    private String name;
    private String tournamentName;
    private Long tournamentId;
    private List<GameReport> games;

    public GroupDetailsReport() {
    }

    public GroupDetailsReport(GroupEntity group) {
        this.id = group.getId();
        this.name = group.getName();
        this.tournamentId = group.getTournament().getId();
        this.tournamentName = group.getTournament().getName();
        if (group.getGames().size() != 0){
            this.games = group.getGames().stream().map(GameReport::new).collect(Collectors.toList());
        }
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

    public List<GameReport> getGames() {
        return games;
    }

    public void setGames(List<GameReport> games) {
        this.games = games;
    }
}
