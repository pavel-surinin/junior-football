package lt.junior.football.score;

import lt.junior.football.game.GameEntity;
import lt.junior.football.team.TeamEntity;

import javax.persistence.*;

/**
 * Created by Pavel on 2017-03-21.
 */
@Entity
public class ScoreEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "SCORE_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "TEAM_ID")
    private TeamEntity team;

    private Long score;

    @ManyToOne
    @JoinColumn(name = "GAME_ID")
    private GameEntity game;

    public ScoreEntity() {
    }

    public ScoreEntity(TeamEntity team, GameEntity game) {
        this.team = team;
        this.game = game;
    }

    public GameEntity getGame() {
        return game;
    }

    public void setGame(GameEntity game) {
        this.game = game;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TeamEntity getTeam() {
        return team;
    }

    public void setTeam(TeamEntity team) {
        this.team = team;
    }

    public Long getScore() {
        return score;
    }

    public void setScore(Long score) {
        this.score = score;
    }

}
