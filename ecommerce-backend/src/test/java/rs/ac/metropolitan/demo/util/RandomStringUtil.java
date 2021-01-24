package rs.ac.metropolitan.demo.util;

public class RandomStringUtil {

    public static String asciiUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    public static String generateRandomString() {
        String[] arrOfChars = asciiUpperCase.split("");
        StringBuilder stringBuilder = new StringBuilder();

        for (int i = 0; i < 6; i++) {
            stringBuilder.append(arrOfChars[(int) (Math.random() * 24)]);
        }
        return stringBuilder.toString();
    }
}
