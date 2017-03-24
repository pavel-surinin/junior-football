package lt.junior.football.player;

import lt.junior.football.goal.GoalReport;
import lt.junior.football.card.CardReport;
import lt.junior.helpers.DateUtils;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Pavel on 2017-03-22.
 */
public class PlayerReport {

    private Long id;
    private String name;
    private String surname;
    private Long number;
    private Long teamId;
    private String teamName;
    private String date;
    private Float age;
    private List<CardReport> cards;
    private List<GoalReport> goals;

    public PlayerReport() {
    }

    public PlayerReport(PlayerEntity player) {
        this.id = player.getId();
        this.name = player.getName();
        this.surname = player.getSurname();
        this.number = player.getNumber();
        this.teamId = player.getTeam().getId();
        this.teamName = player.getTeam().getName();
        this.date = DateUtils.formatDateToString(player.getBirthDate());
        this.age = DateUtils.getAge(player.getBirthDate());
        if (!player.getCards().isEmpty()){
            this.cards = player.getCards().stream().map(CardReport::new).collect(Collectors.toList());
        }
        if (!player.getGoals().isEmpty()){
            this.goals = player.getGoals().stream().map(GoalReport::new).collect(Collectors.toList());
        }
    }

    public List<CardReport> getCards() {
        return cards;
    }

    public void setCards(List<CardReport> cards) {
        this.cards = cards;
    }

    public List<GoalReport> getGoals() {
        return goals;
    }

    public void setGoals(List<GoalReport> goals) {
        this.goals = goals;
    }

    public Float getAge() {
        return age;
    }

    public void setAge(Float age) {
        this.age = age;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Long getNumber() {
        return number;
    }

    public void setNumber(Long number) {
        this.number = number;
    }

    public Long getTeamId() {
        return teamId;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
}
