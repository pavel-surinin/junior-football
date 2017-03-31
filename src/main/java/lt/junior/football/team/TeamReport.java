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
    private LogoEntity logo;
    private ContactsEntity contacts;

    public TeamReport(TeamEntity team) {
        this.id = team.getId();
        this.name = team.getName();
        if (!team.getPlayers().isEmpty()) {
            this.players = team.getPlayers().stream().map(PlayerReport::new).collect(Collectors.toList());
        }
        this.logo = team.getLogo();
        this.contacts = team.getContacts();
    }

    public TeamReport() {
    }

    public ContactsEntity getContacts() {
        return contacts;
    }

    public void setContacts(ContactsEntity contacts) {
        this.contacts = contacts;
    }

    public LogoEntity getLogo() {
        return logo;
    }

    public void setLogo(LogoEntity logo) {
        this.logo = logo;
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
