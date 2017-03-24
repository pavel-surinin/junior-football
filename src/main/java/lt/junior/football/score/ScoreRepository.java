package lt.junior.football.score;

import lt.junior.football.score.ScoreEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

/**
 * Created by Pavel on 2017-03-22.
 */
@Repository
public class ScoreRepository {
    @Autowired
    EntityManager em;

    public ScoreEntity save(ScoreEntity score) {
        if (score.getId() == null) {
            em.persist(score);
        }
        em.merge(score);
        return score;
    }

    public List<ScoreEntity> findAll() {
        List list = em
                .createQuery("SELECT p FROM ScoreEntity p")
                .getResultList();
        return list;
    }

    public boolean delete(Long id) {
        ScoreEntity score = em.find(ScoreEntity.class, id);
        em.remove(score);
        return true;
    }

    public ScoreEntity finById(Long id) {
        return em.find(ScoreEntity.class, id);
    }
}
