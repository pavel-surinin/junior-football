package lt.junior.football.game;

/**
 * Created by Pavel on 2017-03-21.
 */
public class GameReport {

    private Long id;
    private Long number;
    private Long groupId;
    private String groupName;
    private Long team1Id;
    private String team1;
    private Long team1Goals;
    private Long team2Id;
    private String team2;
    private Long team2Goals;

    public GameReport() {
    }

    public GameReport(GameEntity game) {
        this.id = game.getId();
        this.number = game.getNumber();
        if (game.getGroup() != null){
            this.groupName = game.getGroup().getName();
            this.groupId = game.getGroup().getId();
        }
        this.team1 = game.getScores().get(0).getTeam().getName();
        this.team2 = game.getScores().get(1).getTeam().getName();
        this.team1Id = game.getScores().get(0).getTeam().getId();
        this.team2Id = game.getScores().get(1).getTeam().getId();
        this.team1Goals = game.getScores().get(0).getScore();
        this.team2Goals = game.getScores().get(1).getScore();
    }

    public Long getTeam1Goals() {
        return team1Goals;
    }

    public void setTeam1Goals(Long team1Goals) {
        this.team1Goals = team1Goals;
    }

    public Long getTeam2Goals() {
        return team2Goals;
    }

    public void setTeam2Goals(Long team2Goals) {
        this.team2Goals = team2Goals;
    }

    public Long getTeam1Id() {
        return team1Id;
    }

    public void setTeam1Id(Long team1Id) {
        this.team1Id = team1Id;
    }

    public Long getTeam2Id() {
        return team2Id;
    }

    public void setTeam2Id(Long team2Id) {
        this.team2Id = team2Id;
    }

    public String getTeam1() {
        return team1;
    }

    public void setTeam1(String team1) {
        this.team1 = team1;
    }

    public String getTeam2() {
        return team2;
    }

    public void setTeam2(String team2) {
        this.team2 = team2;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNumber() {
        return number;
    }

    public void setNumber(Long number) {
        this.number = number;
    }

    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }
}
