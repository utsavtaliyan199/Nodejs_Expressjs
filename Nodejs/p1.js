// fibonacci program

a = 0,b = 1
arr = []
arr.push(a);
arr.push(b);

for(let i = 3;i <= n;i++)
{
    c = a+b;
    arr.push(c);
    b = c;
    a = b;
}

