/*      Problem Code: ACCURACY  Contest Code: COOK143
        Problem
        There are 100 questions in a paper. Each question carries +3 marks for correct answer, -1 marks for incorrect answer and 0 marks for unattempted question.
        It is given that Chef received exactly X(0 <= X <= 100 marks. Determine the minimum number of problems Chef marked incorrect.
        Input Format
        First line will contain T, number of test cases. Then the test cases follow.
        Each testcase contains of a single integer X, marks that Chef received.
        Output Format
        For each test case, output the minimum number of problems Chef marked incorrect.
        Input           Output
        4
        0               0
        100             2
        32              1
        18              0
*/
#include <iostream>
using namespace std;

int main() {
	// your code goes here
	int t;
	cin>>t;
	while (t--)
	{
	    int x;
	    cin>>x;
	    if (x%3==0)
	    cout<<0<<endl;
	    else if (x%3==2)
	    cout<<1<<endl;
	    else
	    cout<<2<<endl;
	}
	return 0;
}
