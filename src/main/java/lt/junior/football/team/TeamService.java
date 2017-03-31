package lt.junior.football.team;

import lt.junior.helpers.SaveUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.*;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Pavel on 2017-03-21.
 */
@Service
public class TeamService {

    @Autowired
    TeamRepository repository;

    @Transactional
    public TeamEntity save(TeamEntity team) {
        return repository.save(SaveUtils.setFirstUpper(team));

    }

    public List<TeamReport> findAll() {
        return repository.findAll().stream().map(TeamReport::new).collect(Collectors.toList());
    }

    public TeamReport findById(Long id) {
        return new TeamReport(repository.findById(id));
    }

    public List<String> getIcons() {
        FileInputStream fis;
        List<String> icons = null;
        try {
            fis = new FileInputStream(new File("src/main/resources/icons"));
            InputStreamReader isr = new InputStreamReader(fis);
            final BufferedReader bufferedReader = new BufferedReader(isr);
            icons = bufferedReader.lines().collect(Collectors.toList());
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return icons;
    }
}
