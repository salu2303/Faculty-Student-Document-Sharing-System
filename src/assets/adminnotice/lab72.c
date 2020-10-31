#include<unistd.h>
#include<stdio.h>
#include<sys/types.h>
#include<sys/stat.h>
#include<fcntl.h>
#include<string.h>
#include<sys/wait.h>
#include<stdlib.h>
void main()
{
        int status,pid,pfd[2],p,fd,n;
	char buff[50];
        p=pipe(pfd);
        if(p==0)
        {
                pid=fork();
                if(pid>0)
                {
                        wait(&status);
                       	close(pfd[1]);
                        dup2(pfd[0],0);
			printf("Sorted File Content\n");
                        execl("/bin/sort","sort",(char *)NULL);

		}
                else
                {
                        close(pfd[0]);
			fd=open("dest.txt",O_RDONLY);
			n=read(fd,buff,sizeof(buff));
			write(pfd[1],buff,n);

                }

        }
}

