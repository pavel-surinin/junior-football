package lt.junior.football.team;

import lt.junior.football.player.PlayerReport;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Pavel on 2017-03-21.
 */
public class TeamReport {

    private Long id;
    private String name;
    private List<PlayerReport> players;

    public TeamReport(TeamEntity team) {
        this.id = team.getId();
        this.name = team.getName();
        if (!team.getPlayers().isEmpty()) {
            this.players = team.getPlayers().stream().map(PlayerReport::new).collect(Collectors.toList());
        }
    }

    public TeamReport() {
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

    public List<PlayerReport> getPlayers() {
        return players;
    }

    public void setPlayers(List<PlayerReport> players) {
        this.players = players;
    }
}
