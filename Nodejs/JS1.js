let n = 6;

let pattern = "";

for(let i = 1;i <= n;i++)
{
    let toLog = "";
    for(let j = 1;j <= n;j++)
    {
        toLog+= "*";
        pattern+= "#";
    }
    pattern+= "\n";
    console.log(toLog);
}

console.log(pattern);

pattern = "";

for(let i = 1;i <= n;i++)
{
    let toLog = "";
    if(i == 1 || i == n)
    {
        for(let j = 1;j <= n;j++)
        {
            toLog+= "*";
            pattern+= "#";
        }
    }
    else
    {
        for(let j = 1;j <= n;j++)
        {
            if(j == 1 || j == n)
            {
                toLog+= "*";
                pattern+= "#";;
            }
            else 
            {
                toLog+= " ";
                pattern+= " ";
            }
        }
    }
    console.log(toLog);
    pattern+= "\n";
}

console.log(pattern);

for(let i = 1;i <= n;i++)
{
    let toLog = "";
    for(let j = 1;j <= n-i;j++)
    {
        toLog+= " ";
    }

    for(let j = 1;j <= i;j++)
    {
        toLog+= "*";
    }

    console.log(toLog);
}

for(let i = 1;i <= n;i++)
{
    let toLog = "";
    // for(let j = 1;j <= n-i;j++)
    // {
    //     toLog+= " ";
    // }

    for(let j = 1;j <= i;j++)
    {
        toLog+= "*";
    }

    console.log(toLog);
}

console.log();

for(let i = 1;i <= n;i++)
{
    let toLog = "";
    for(let j = 1;j <= n-i+1;j++)
    {
        toLog+= "*";
    }

    // for(let j = 1;j <= i;j++)
    // {
    //     toLog+= "*";
    // }

    console.log(toLog);
}

console.log();

for(let i = 1;i <= n;i++)
{
    let toLog = "";

    if(i == 1 || i == n)
    {
        for(let j = 1;j <= i;j++)
        {
            toLog+= "*";
        }
    }
    else 
    {
        for(let j = 1;j <= i;j++)
        {
            if(j == 1 || j == i) toLog+= "*";
            else 
            {
                toLog+= " ";
            }
        }
    }
    console.log(toLog);
}

for(let i = 1;i <= n;i++)
{
    let toLog = "";

    for(let j = 1;j <= n-i;j++)
    {
        toLog+= " ";
    }
    for(let j = 1;j <= 2*i-1;j++)
    {
        toLog+= "*";
    }
    console.log(toLog);
}
console.log();

for(let i = 1;i <= n;i++)
{
    let toLog = "";

    for(let j = 1;j <= i-1;j++)
    {
        toLog+= " ";
    }

    for(let j = 1;j <= 2*(n-i)+1;j++)
    {
        toLog+= "*";
    }
    console.log(toLog);
}

console.log();

for(let i = 1;i <= n;i++)
{
    let toLog = "";

    for(let j = 1;j <= n-i;j++)
    {
        toLog+= " ";
    }

    if(i == 1 || i == n)
    {
        for(let j = 1;j <= 2*i-1;j++)
        {
            toLog+= "*";
        }
    }
    else 
    {
        for(let j = 1; j <= 2*i-1;j++)
        {
            if(j == 1 || j == 2*i-1) toLog+= "*";
            else  toLog+= " ";
        }
    }
    console.log(toLog);
}



