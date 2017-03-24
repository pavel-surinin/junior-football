package lt.junior.football.group;

import lt.junior.football.tournament.TournamentEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Pavel on 2017-03-21.
 */
@Service
public class GroupService {

    @Autowired
    GroupRepository repository;

    @Transactional
    public GroupEntity save(GroupEntity group) {
        return repository.save(group);
    }

    public List<GroupReport> findAll() {
        return repository.findAll().stream().map(g-> new GroupReport(g)).collect(Collectors.toList());
    }

    public GroupDetailsReport findById(Long id) {
        return new GroupDetailsReport(repository.findById(id));
    }
}
