package lt.junior.football.goal;

/**
 * Created by Pavel on 2017-03-24.
 */
public class GoalReport {
    private Long id;
    private Long gameId;
    private Long playerId;
    private String playerName;
    private Long minute;
    private Boolean isOwnGoal;

    public GoalReport(GoalEntity goal) {
        this.id = goal.getId();
        this.gameId = goal.getGame().getId();
        this.playerId = goal.getPlayer().getId();
        this.playerName = goal.getPlayer().getName() + " " + goal.getPlayer().getSurname();
        this.minute = goal.getMinute();
        this.isOwnGoal = goal.getOwnGoal();
    }

    public GoalReport() {
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

    public Boolean getOwnGoal() {
        return isOwnGoal;
    }

    public void setOwnGoal(Boolean ownGoal) {
        isOwnGoal = ownGoal;
    }
}
