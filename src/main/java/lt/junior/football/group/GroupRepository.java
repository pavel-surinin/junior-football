package lt.junior.football.group;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

/**
 * Created by Pavel on 2017-03-21.
 */
@Repository
public class GroupRepository {

    @Autowired
    EntityManager em;

    public GroupEntity save(GroupEntity group) {
        if (group.getId() == null) {
            em.persist(group);
        }
        em.merge(group);
        return group;
    }

    public List<GroupEntity> findAll() {
        List list = em
                .createQuery("SELECT p FROM GroupEntity p")
                .getResultList();
        return list;
    }

    public boolean delete(Long id) {
        GroupEntity group = em.find(GroupEntity.class, id);
        em.remove(group);
        return true;
    }

    public GroupEntity findById(Long id) {
        return em.find(GroupEntity.class, id);
    }
}
