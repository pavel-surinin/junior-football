package lt.junior.helpers;

import lt.junior.football.team.TeamEntity;

/**
 * Created by Pavel on 2017-03-22.
 */
public class SaveUtils {

    private static String setFirstUpper(String string){
        String firstLetter = string.substring(0, 1).toUpperCase();
        String otherLetters = string.substring(1, string.length()).toLowerCase();
        return firstLetter + otherLetters;
    }

    public static TeamEntity setFirstUpper(TeamEntity team) {
        team.setName(setFirstUpper(team.getName()));
        team.getPlayers().forEach(p->{
            p.setName(setFirstUpper(p.getName()));
            p.setSurname(setFirstUpper(p.getSurname()));
        });
        return team;
    }
}
