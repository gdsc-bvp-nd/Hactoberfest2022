/*
 * Problem Code : EXPERT
 * Problem
 * A problem setter is called an expert if at least 50% of their problems are
 * approved by Chef.
 * Munchy submitted X problems for approval. If Y problems out of those were
 * approved, find whether Munchy is an expert or not.
 * Input Format
 * The first line of input will contain a single integer T, denoting the number
 * of test cases.
 * Each test case consists of a two space-separated integers X and Y - the
 * number of problems submitted and the number of problems that were approved by
 * Chef.
 * Output Format
 * For each test case, output on a new line YES, if Munchy is an expert.
 * Otherwise, print NO.
 */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef {
    public static void main(String[] args) throws java.lang.Exception {
        // your code goes here
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            float v1 = sc.nextFloat();
            float v2 = sc.nextFloat();
            float res = (v2 / v1);
            res *= 100;
            if ((int) res >= 50)
                System.out.println("YES");
            else
                System.out.println("NO");
        }
    }
}