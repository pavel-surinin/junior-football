package lt.junior.football.game;

import lt.junior.football.group.GroupEntity;
import lt.junior.football.group.GroupReport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@RestController
public class GameController {

    @Autowired
    GameService service;

    @PostMapping("/game")
    public GameEntity save(@RequestBody GameEntity game){
        return service.save(game);
    }

    @GetMapping("/game")
    public List<GameReport> findAll(){
        return service.findAll();
    }

    @GetMapping("/game/{id}")
    public GameReport findById(@PathVariable Long id){
        return service.findById(id);
    }


}
