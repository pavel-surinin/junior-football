package lt.junior.football.game;

import lt.junior.football.card.CardEntity;
import lt.junior.football.goal.GoalEntity;
import lt.junior.football.score.ScoreEntity;
import lt.junior.football.group.GroupEntity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@Entity
public class GameEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "GAME_ID")
    private Long id;

    @Column(nullable = false)
    private Long number;

    @ManyToOne
    @JoinColumn(name = "GROUP_ID")
    private GroupEntity group;

    @Column(nullable = false)
    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL)
    private List<ScoreEntity> scores;

    @OneToMany(mappedBy = "game",cascade = CascadeType.ALL)
    private List<GoalEntity> goals;

    @OneToMany(mappedBy = "game", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<CardEntity> cards;

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

    public List<ScoreEntity> getScores() {
        return scores;
    }

    public void setScores(List<ScoreEntity> scores) {
        this.scores = scores;
    }

    public List<GoalEntity> getGoals() {
        return goals;
    }

    public void setGoals(List<GoalEntity> goals) {
        this.goals = goals;
    }

    public List<CardEntity> getCards() {
        return cards;
    }

    public void setCards(List<CardEntity> cards) {
        this.cards = cards;
    }

    public GroupEntity getGroup() {
        return group;
    }

    public void setGroup(GroupEntity group) {
        this.group = group;
    }

    @Override
    public String toString() {
        return "GameEntity{" +
                "id=" + id +
                ", number=" + number +
                ", group=" + group.getName() +
                '}';
    }
}
