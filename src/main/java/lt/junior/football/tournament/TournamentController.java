package lt.junior.football.tournament;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@RestController
public class TournamentController {

    @Autowired
    TournamentService service;

    @PostMapping("/tournament/{id}/generate")
    public TournamentReport generate(@PathVariable Long id){
        return service.generate(id);
    }

    @PostMapping("/tournament")
    public TournamentEntity save(@RequestBody TournamentEntity tournament){
        return service.save(tournament);
    }

    @GetMapping("/tournament")
    public List<TournamentReport> findAll(){
        return service.findAll();
    }

    @GetMapping("/tournament/{id}")
    public TournamentReport findById(@PathVariable Long id){
        return service.findById(id);
    }
}
