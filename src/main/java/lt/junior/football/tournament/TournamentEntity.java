package lt.junior.football.tournament;

import lt.junior.football.group.GroupEntity;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@Entity
public class TournamentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "TOURNAMENT_ID")
    private Long id;

    @Column(nullable = false)
    private Long ageMin;

    @Column(nullable = false)
    private Long ageMax;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "tournament", cascade = CascadeType.ALL)
    private List<GroupEntity> groups;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAgeMin() {
        return ageMin;
    }

    public void setAgeMin(Long ageMin) {
        this.ageMin = ageMin;
    }

    public Long getAgeMax() {
        return ageMax;
    }

    public void setAgeMax(Long ageMax) {
        this.ageMax = ageMax;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<GroupEntity> getGroups() {
        return groups;
    }

    public void setGroups(List<GroupEntity> groups) {
        this.groups = groups;
    }


}
