package lt.junior.football.tournament;

import lt.junior.football.group.GroupReport;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Pavel on 2017-03-21.
 */
public class TournamentReport {

    private String name;
    private Long ageMin;
    private Long ageMax;
    private List<GroupReport> groups;

    public TournamentReport(TournamentEntity t) {
        this.name = t.getName();
        this.ageMin = t.getAgeMin();
        this.ageMax = t.getAgeMax();
        System.out.println(t.getGroups().size() + " groups size");
        if (!t.getGroups().isEmpty()) {
            this.groups = t.getGroups().stream().map(g-> new GroupReport(g)).collect(Collectors.toList());
        }
    }

    public TournamentReport() {
    }

    public List<GroupReport> getGroups() {
        return groups;
    }

    public void setGroups(List<GroupReport> groups) {
        this.groups = groups;
    }

    public String getName() {
        return name;
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

    public void setName(String name) {
        this.name = name;
    }
}
