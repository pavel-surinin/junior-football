package lt.junior.football.card;

/**
 * Created by Pavel on 2017-03-24.
 */
public class CardReport {
    private Long id;
    private Long gameId;
    private Long playerId;
    private String playerName;
    private Long minute;
    private String type;

    public CardReport(CardEntity card) {
        this.id = card.getId();
        this.gameId = card.getGame().getId();
        this.playerId = card.getPlayer().getId();
        this.playerName = card.getPlayer().getName() + " " + card.getPlayer().getSurname();
        this.minute = card.getMinute();
        this.type = card.getType();
    }

    public CardReport() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getGameId() {
        return gameId;
    }

    public void setGameId(Long gameId) {
        this.gameId = gameId;
    }

    public Long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(Long playerId) {
        this.playerId = playerId;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
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
