package lt.junior.football.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@Repository
public class GameRepository {

    @Autowired
    EntityManager em;

    public GameEntity save(GameEntity game) {
        if (game.getId() == null) {
            em.persist(game);
        }
        em.merge(game);
        return game;
    }

    public List<GameEntity> findAll() {
        List list = em
                .createQuery("SELECT p FROM GameEntity p")
                .getResultList();
        return list;
    }

    public boolean delete(Long id) {
        GameEntity game = em.find(GameEntity.class, id);
        em.remove(game);
        return true;
    }

    public GameEntity findById(Long id) {
        return em.find(GameEntity.class, id);
    }
}
