package lt.junior.football.group;

import lt.junior.football.tournament.TournamentEntity;
import lt.junior.football.tournament.TournamentReport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@RestController
public class GroupController {

    @Autowired
    GroupService service;

    @PostMapping("/group")
    public GroupEntity save(@RequestBody GroupEntity group){
        return service.save(group);
    }

    @GetMapping("/group")
    public List<GroupReport> findAll(){
        return service.findAll();
    }

    @GetMapping("/group/{id}")
    public GroupDetailsReport findById(@PathVariable Long id){
        return service.findById(id);
    }
}
