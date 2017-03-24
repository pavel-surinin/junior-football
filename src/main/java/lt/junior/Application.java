package lt.junior;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

/**
 * Created by Pavel on 2017-03-21.
 */
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(DataPreloader loader) {
        return (args) -> {
            loader.loadTournaments();
            loader.loadTeams(23,10);
            loader.loadTeams(29,13);
            loader.loadTeams(18,16);
        };
    }
}

