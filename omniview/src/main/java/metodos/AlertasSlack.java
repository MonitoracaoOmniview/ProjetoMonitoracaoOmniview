package metodos;

import com.github.britooo.looca.api.core.Looca;

public class AlertasSlack {

    private String tipoAlerta;
    private Double memoriaRam;
    private Double disco;

    AutenticarLogin loginAutenticado = new AutenticarLogin();
    metodos.RecursosComputador reqMaq = new RecursosComputador();
    IntegracaoSlack slack = new IntegracaoSlack();
    Looca looca = new Looca();
    Log log = new Log();

    String alertaMedio = ":large_yellow_circle:";
    String alertaGrave = ":rotating_light:";

    public void alertaRam(Double ramEmUso, Double ramTotal, String hostName) {

        String tipoComponente = "Memoria Ram";
        Double ramLivre = ramTotal - ramEmUso;
        memoriaRam = ramTotal;
        Double alertaDeRamGrave = (50.0 / 100.0) * memoriaRam;
        Double alertaConsumoTotalRam = (95.0 / 100.0) * memoriaRam;

        do {
            try {
                if (ramEmUso >= alertaConsumoTotalRam) {
                    tipoAlerta = "Alerta de Ram - Ram acima de 90%";
                    if (slack.consultaEmpresa() == 1) {
                        slack.getEnviaAlertasCmMikeys(tipoAlerta, alertaGrave,
                                hostName, tipoComponente, ramLivre);
                    } else {
                        slack.getEnviaAlertasBurgerqueen(tipoAlerta, alertaGrave,
                                hostName, tipoComponente, ramLivre);
                    }
                } else if (ramEmUso >= alertaDeRamGrave) {
                    tipoAlerta = "Alerta de Ram - 50% de Ram utilizada";
                    if (slack.consultaEmpresa() == 1) {
                        slack.getEnviaAlertasCmMikeys(tipoAlerta, alertaMedio,
                                hostName, tipoComponente, ramLivre);
                    } else {
                        slack.getEnviaAlertasBurgerqueen(tipoAlerta, alertaMedio,
                                hostName, tipoComponente, ramLivre);
                    }
                }
            } catch (Exception e) {
                System.out.println("erro");
            }
        } while (loginAutenticado.isUserAutenticado() == true);
    }

    public void alertaDisco(Double discoEmUso, Double discoTotal, String hostName) {

        String tipoComponente = "Disco";
        Double discoLivre = discoTotal - discoEmUso;
        disco = discoTotal;
        Double alertaDeDisco = (50.0 / 100.0) * disco;
        Double alertaDeDiscoGrave = (90.0 / 100.0) * disco;

        do {
            try {
                if (discoEmUso >= alertaDeDisco) {
                    tipoAlerta = "Alerta de Disco - 50% de disco utilizado";
                    if (slack.consultaEmpresa() == 1) {
                        slack.getEnviaAlertasCmMikeys(tipoAlerta, alertaMedio,
                                hostName, tipoComponente, discoLivre);

                    } else {
                        slack.getEnviaAlertasBurgerqueen(tipoAlerta, alertaMedio,
                                hostName, tipoComponente, discoLivre);
                    }
                } else if (discoEmUso >= alertaDeDiscoGrave) {
                    tipoAlerta = "Alerta de Disco - Disco acima de 90%";
                    if (slack.consultaEmpresa() == 1) {
                        slack.getEnviaAlertasCmMikeys(tipoAlerta, alertaGrave,
                                hostName, tipoComponente, discoLivre);

                    } else {
                        slack.getEnviaAlertasBurgerqueen(tipoAlerta, alertaGrave,
                                hostName, tipoComponente, discoLivre);
                    }
                }
            } catch (Exception e) {
                System.out.println("erro");
            }
        } while (loginAutenticado.isUserAutenticado() == true);
    }
}
