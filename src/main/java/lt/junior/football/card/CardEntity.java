package lt.junior.football.card;

import lt.junior.football.game.GameEntity;
import lt.junior.football.player.PlayerEntity;

import javax.persistence.*;

/**
 * Created by Pavel on 2017-03-21.
 */
@Entity
public class CardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "CARD_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "GAME_ID")
    private GameEntity game;

    @ManyToOne
    @JoinColumn(name = "PLAYER_ID")
    private PlayerEntity player;

    @Column(nullable = false)
    private Long minute;

    @Column(nullable = false)
    private String type;

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
