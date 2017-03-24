package lt.junior.football.team;

import lt.junior.football.group.GroupEntity;
import lt.junior.football.player.PlayerEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@Repository
public class TeamRepository {

    @Autowired
    EntityManager em;

    public TeamEntity save(TeamEntity team) {
        if (team.getId() == null) {
            em.persist(team);
            List<PlayerEntity> players = new ArrayList<>(team.getPlayers());
            team.getPlayers().clear();
            players.forEach(p->p.setTeam(team));
        }
        em.merge(team);
        return team;
    }

    public List<TeamEntity> findAll() {
        List list = em
                .createQuery("SELECT p FROM TeamEntity p")
                .getResultList();
        return list;
    }

    public boolean delete(Long id) {
        TeamEntity team = em.find(TeamEntity.class, id);
        em.remove(team);
        return true;
    }

    public TeamEntity findById(Long id) {
        return em.find(TeamEntity.class, id);
    }
}
