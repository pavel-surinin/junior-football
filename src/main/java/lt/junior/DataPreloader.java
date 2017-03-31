package lt.junior;

import com.github.javafaker.Faker;
import lt.junior.football.player.PlayerEntity;
import lt.junior.football.team.ContactsEntity;
import lt.junior.football.team.LogoEntity;
import lt.junior.football.team.TeamEntity;
import lt.junior.football.team.TeamService;
import lt.junior.football.tournament.TournamentEntity;
import lt.junior.football.tournament.TournamentService;
import lt.junior.helpers.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

/**
 * Created by Pavel on 2017-03-23.
 */
@Service
public class DataPreloader {

    @Autowired
    TournamentService tournamentService;
    @Autowired
    TeamService teamService;

    public void loadTournaments() {
        TournamentEntity t10 = new TournamentEntity();
        t10.setName("Vaikų turnyras");
        t10.setAgeMin(10L);
        t10.setAgeMax(13L);
        tournamentService.save(t10);
        TournamentEntity t13 = new TournamentEntity();
        t13.setName("Maištininkų turnyras");
        t13.setAgeMin(13L);
        t13.setAgeMax(16L);
        tournamentService.save(t13);
        TournamentEntity t18 = new TournamentEntity();
        t18.setName("Jaunių turnyras");
        t18.setAgeMin(16L);
        t18.setAgeMax(18L);
        tournamentService.save(t18);
    }

    public void loadTeams(int number,int ty) {
        Date from;
        Date to;
        if(ty == 10){
            from = DateUtils.formatStringToDate("2004-03-22");
            to = DateUtils.formatStringToDate("2007-03-22");
        }else if( ty == 13){
            from = DateUtils.formatStringToDate("2001-03-22");
            to = DateUtils.formatStringToDate("2004-03-22");
        } else {
            from = DateUtils.formatStringToDate("1999-03-22");
            to = DateUtils.formatStringToDate("2001-03-22");
        }
        List<String> icons = teamService.getIcons();
        Faker faker = new Faker();
        for (int j = 0; j < number; j++) {
            TeamEntity team = new TeamEntity();
            team.setName(faker.university().name());
            List<PlayerEntity> players = new ArrayList<>();
            for (Long i = 1L; i < 8L ; i++) {
                PlayerEntity p1 = new PlayerEntity();
                p1.setName(faker.name().firstName());
                p1.setSurname(faker.name().lastName());
                p1.setBirthDate(faker.date().between(from,to));
                p1.setNumber(i);
                players.add(p1);
            }
            team.setPlayers(players);
            LogoEntity logo = new LogoEntity();
            String[] bg = new String[] {"cloud","shield","circle","circle-o","dot-circle-o","square","square-o","adjust"};
            String[] color = new String[] {"w3-text-red","w3-text-green","w3-text-blue","w3-text-yellow","w3-text-white","w3-text-black","w3-text-grey"};
            logo.setLogoBg(bg[new Random().nextInt(bg.length)]);
            logo.setLogoBgStyle(color[new Random().nextInt(color.length)]);
            logo.setLogoTop(icons.get(new Random().nextInt(icons.size())));
            logo.setLogoTopStyle(color[new Random().nextInt(color.length)]);
            team.setLogo(logo);
            ContactsEntity contacts = new ContactsEntity();
            contacts.setName(faker.name().fullName());
            contacts.setPhone(faker.phoneNumber().cellPhone());
            contacts.setEmail("simple@mail.com");
            team.setContacts(contacts);
            teamService.save(team);
        }

    }
}
