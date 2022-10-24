// Given an even number N (greater than 2), return two prime numbers whose sum
// will be equal to given number. There are several combinations possible. Print
// only the pair whose minimum value is the smallest among all the minimum
// values of pairs and print the minimum element first.
//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(in.readLine());

            Solution obj = new Solution();
            List<Integer> ans = new ArrayList<Integer>();
            ans = obj.primeDivision(N);
            System.out.println(ans.get(0) + " " + ans.get(1));
        }
    }
}

class Solution {
    static List<Integer> primeDivision(int N) {
        ArrayList<Integer> prime = new ArrayList<>();
        List<Integer> ans = new ArrayList<>();
        boolean[] arr = new boolean[N + 1];
        for (int i = 2; i * i < arr.length; ++i)
            if (arr[i] == false)
                for (int j = i; j * i < arr.length; ++j)
                    arr[j * i] = true;

        for (int i = 2; i < arr.length; ++i)
            if (arr[i] == false)
                prime.add(i);

        int i = 0, j = prime.size() - 1;
        while (i <= j) {
            if (prime.get(i) + prime.get(j) == N) {
                ans.add(prime.get(i));
                ans.add(prime.get(j));
                return ans;
            } else if (prime.get(i) + prime.get(j) > N)
                j--;
            else
                i++;
        }
        return ans;
    }
}