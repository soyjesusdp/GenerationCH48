import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        HashMap<String, String> diccionario = new HashMap<>();
        diccionario.put("Hola", "Hello");
        diccionario.put("Mundo", "World");
        diccionario.put("Perro", "Dog");
        diccionario.put("Gato", "Cat");
        diccionario.put("Casa", "House");

        List<String> palabrasEspañol = new ArrayList<>(diccionario.keySet());
        Collections.shuffle(palabrasEspañol);

        Scanner scanner = new Scanner(System.in);
        int correctas = 0, incorrectas = 0;

        for (int i = 0; i < 5; i++) {
            String palabraEspañol = palabrasEspañol.get(i);
            System.out.print("Traduce al inglés la palabra: " + palabraEspañol + ": ");
            String respuesta = scanner.nextLine().trim().toLowerCase();

            if (respuesta.equals(diccionario.get(palabraEspañol).toLowerCase())) {
                correctas++;
            } else {
                incorrectas++;
            }
        }

        System.out.println("Respuestas correctas: " + correctas);
        System.out.println("Respuestas incorrectas: " + incorrectas);
    }
}
