package lt.junior.football.goal;

import lt.junior.football.game.GameEntity;
import lt.junior.football.player.PlayerEntity;

import javax.persistence.*;

/**
 * Created by Pavel on 2017-03-21.
 */
@Entity
public class GoalEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "GOAL_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "GAME_ID")
    private GameEntity game;

    @ManyToOne
    @JoinColumn(name = "PLAYER_ID")
    private PlayerEntity player;

    @Column(nullable = false)
    private Long minute;

    private Boolean ownGoal = false;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public GameEntity getGame() {
        return game;
    }

    public void setGame(GameEntity game) {
        this.game = game;
    }

    public PlayerEntity getPlayer() {
        return player;
    }

    public void setPlayer(PlayerEntity player) {
        this.player = player;
    }

    public Long getMinute() {
        return minute;
    }

    public void setMinute(Long minute) {
        this.minute = minute;
    }

    public Boolean getOwnGoal() {
        return ownGoal;
    }

    public void setOwnGoal(Boolean ownGoal) {
        this.ownGoal = ownGoal;
    }


}
