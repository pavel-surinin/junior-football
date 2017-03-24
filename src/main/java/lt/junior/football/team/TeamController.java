package lt.junior.football.team;

import lt.junior.football.group.GroupEntity;
import lt.junior.football.group.GroupReport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@RestController
public class TeamController {

    @Autowired
    TeamService service;

    @PostMapping("/team")
    public TeamEntity save(@RequestBody TeamEntity team){
        return service.save(team);
    }

    @GetMapping("/team")
    public List<TeamReport> findAll(){
        return service.findAll();
    }

    @GetMapping("/team/{id}")
    public TeamReport findById(@PathVariable Long id){
        return service.findById(id);
    }
}