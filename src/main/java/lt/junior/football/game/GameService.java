package lt.junior.football.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Pavel on 2017-03-21.
 */
@Service
public class GameService {
    @Autowired
    GameRepository repository;

    public GameEntity save(GameEntity game) {
        return repository.save(game);
    }

    public List<GameReport> findAll() {
        return repository.findAll().stream().map(g-> new GameReport(g)).collect(Collectors.toList());
    }

    public GameReport findById(Long id) {
        return new GameReport(repository.findById(id));
    }
}
