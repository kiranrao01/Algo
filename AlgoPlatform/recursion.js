function recursion(x) {

    if (x==1) {

        return 1;

    }

    else {

        return x*recursion(x-1);

    }

}


recursion(3);
