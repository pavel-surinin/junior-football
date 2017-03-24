package lt.junior.football.group;

import lt.junior.football.game.GameEntity;
import lt.junior.football.tournament.TournamentEntity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@Entity
public class GroupEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "GROUP_ID")
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "TOURNAMENT_ID")
    private TournamentEntity tournament;

    @OneToMany(mappedBy = "group", cascade = CascadeType.PERSIST)
    private List<GameEntity> games;

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

    public TournamentEntity getTournament() {
        return tournament;
    }

    public void setTournament(TournamentEntity tournament) {
        this.tournament = tournament;
    }

    public List<GameEntity> getGames() {
        return games;
    }

    public void setGames(List<GameEntity> games) {
        this.games = games;
    }


}
