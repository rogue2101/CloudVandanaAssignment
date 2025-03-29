import java.util.HashMap;
import java.util.Scanner;

public class AnagramCheck {

    public static boolean areAnagrams(String str1, String str2) {
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();

        if (str1.length() != str2.length()) {
            return false;
        }

        HashMap<Character, Integer> charCount = new HashMap<>();

        for (char ch : str1.toCharArray()) {
            charCount.put(ch, charCount.getOrDefault(ch, 0) + 1);
        }

        for (char ch : str2.toCharArray()) {
            if (!charCount.containsKey(ch)) {
                return false;
            }
            charCount.put(ch, charCount.get(ch) - 1);
            if (charCount.get(ch) == 0) {
                charCount.remove(ch);
            }
        }

        return charCount.isEmpty();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first string: ");
        String str1 = sc.nextLine();
        System.out.print("Enter second string: ");
        String str2 = sc.nextLine();

        boolean result = areAnagrams(str1, str2);
        System.out.println("Anagrams: " + result);
        sc.close();
    }
}
