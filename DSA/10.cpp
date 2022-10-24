/*
    Problem Code:   SNDMA
        Problem Statement
    Write a program that accepts sets of three numbers, and prints the second-maximum number among the three.
  Input
    First line contains the number of triples, N.
    The next N lines which follow each have three space separated integers.
  Output
    For each of the N triples, output one new line which contains the second-maximum integer among the three.
*
*
* */
#include <iostream>
using namespace std;

void solve(){
    int a,b,c;
    cin>>a>>b>>c;
    if(a>b && a<c){
        cout<<a<<"\n";
    }else if(a>c && a<b){
        cout<<a<<"\n";
    }else if(b>a && b<c){
        cout<<b<<"\n";
    }else if(b>c && b<a){
        cout<<b<<"\n";
    }else if(c>a && c<b){
        cout<<c<<"\n";
    }else if(c>b && c<a){
        cout<<c<<"\n";
    }
}

int main ()
{
    int t;
    cin>>t;
    while(t--){
        solve();
    }
    return 0;
}