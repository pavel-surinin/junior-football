package lt.junior.football.team;

import lt.junior.football.player.PlayerEntity;
import lt.junior.football.score.ScoreEntity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@Entity
public class TeamEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "TEAM_ID")
    private Long id;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<PlayerEntity> players;

    @OneToMany(mappedBy = "team", cascade = CascadeType.REMOVE)
    private List<ScoreEntity> scores;

    public List<ScoreEntity> getScores() {
        return scores;
    }

    public void setScores(List<ScoreEntity> scores) {
        this.scores = scores;
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

    public List<PlayerEntity> getPlayers() {
        return players;
    }

    public void setPlayers(List<PlayerEntity> players) {
        this.players = players;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TeamEntity that = (TeamEntity) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
