package lt.junior.football.tournament;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@Repository
public class TournamentRepository {

    @Autowired
    EntityManager em;

    public TournamentEntity save(TournamentEntity tournament) {
        if (tournament.getId() == null) {
            em.persist(tournament);
        }
        em.merge(tournament);
        return tournament;
    }

    public List<TournamentEntity> findAll() {
        List list = em
                .createQuery("SELECT p FROM TournamentEntity p")
                .getResultList();
        return list;
    }

    public boolean delete(Long id) {
        TournamentEntity candidate = em.find(TournamentEntity.class, id);
        em.remove(candidate);
        return true;
    }

    public TournamentEntity finById(Long id) {
        return em.find(TournamentEntity.class, id);
    }
}
