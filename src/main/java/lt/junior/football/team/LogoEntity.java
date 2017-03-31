package lt.junior.football.team;

import javax.persistence.*;

/**
 * Created by Pavel on 2017-03-31.
 */
@Entity
public class LogoEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String logoBg;
    private String logoBgStyle;
    private String logoTop;
    private String logoTopStyle;
    private String logoText;
    private String logoTextStyle;
    private String logoTextSizeStyle;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogoBg() {
        return logoBg;
    }

    public void setLogoBg(String logoBg) {
        this.logoBg = logoBg;
    }

    public String getLogoBgStyle() {
        return logoBgStyle;
    }

    public void setLogoBgStyle(String logoBgStyle) {
        this.logoBgStyle = logoBgStyle;
    }

    public String getLogoTop() {
        return logoTop;
    }

    public void setLogoTop(String logoTop) {
        this.logoTop = logoTop;
    }

    public String getLogoTopStyle() {
        return logoTopStyle;
    }

    public void setLogoTopStyle(String logoTopStyle) {
        this.logoTopStyle = logoTopStyle;
    }

    public String getLogoText() {
        return logoText;
    }

    public void setLogoText(String logoText) {
        this.logoText = logoText;
    }

    public String getLogoTextStyle() {
        return logoTextStyle;
    }

    public void setLogoTextStyle(String logoTextStyle) {
        this.logoTextStyle = logoTextStyle;
    }

    public String getLogoTextSizeStyle() {
        return logoTextSizeStyle;
    }

    public void setLogoTextSizeStyle(String logoTextSizeStyle) {
        this.logoTextSizeStyle = logoTextSizeStyle;
    }
}
