# 					windows自动运行命令解析

### 计划命令每24小时运行一次（目录 D:\git_rpo\web_project\gitpush.sh 是git上传的脚本）
    schtasks /create /sc hourly /st 00:24:00 /tn "Automatic git push" /tr D:\git_rpo\web_project\gitpush.sh

### C:\Users\Administrator>schtasks /?

__SCHTASKS /parameter [arguments]__

__描述:__

    允许管理员创建、删除、查询、更改、运行和中止本地或远程系统上的计划任务。

__参数列表:__

    /Create         创建新计划任务。

    /Delete         删除计划任务。(schtasks /delete /tn 任务名)

    /Query          显示所有计划任务。

    /Change         更改计划任务属性。

    /Run            按需运行计划任务。

    /End            中止当前正在运行的计划任务。

    /ShowSid        显示与计划的任务名称相应的安全标识符。

    /?              显示此帮助消息。

__Examples:__

    SCHTASKS
    SCHTASKS /?
    SCHTASKS /Run /?
    SCHTASKS /End /?
    SCHTASKS /Create /?
    SCHTASKS /Delete /?
    SCHTASKS /Query  /?
    SCHTASKS /Change /?
    SCHTASKS /ShowSid /?


## Schtasks

1. 安排命令和程序定期运行或在指定时间内运行。从计划表中添加和删除任务，按需要启动和停止任务，显示和更改计划任务。

若要查看该命令语法，请单击以下命令： 

## schtasks create

    创建新的计划任务。
    语法

    schtasks /create /tn TaskName /tr TaskRun /sc schedule [/mo modifier] [/d day] [/m month[,month...] [/i IdleTime] [/st StartTime] [/sd StartDate] [/ed EndDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]] /?
__参数__

### /tn TaskName    
__指定任务的名称。__

### /tr TaskRun
    
   __指定任务运行的程序或命令。键入可执行文件、脚本文件或批处理文件的完全合格的路径和文件名。如果忽略该路径，SchTasks.exe 将假定文件在 Systemroot\System32 目录下。__
   
### /sc schedule
    
__指定计划类型。有效值为 '''MINUTE、HOURLY、DAILY、WEEKLY、MONTHLY、ONCE、ONSTART、ONLOGON、ONIDLE。'''值 说明__
    
    MINUTE、HOURLY、DAILY、WEEKLY、MONTHLY     指定计划的时间单位。
    ONCE                任务在指定的日期和时间运行一次。
    ONSTART             任务在每次系统启动的时候运行。可以指定启动的日期，或下一次系统启动的时候运行任务。
    ONLOGON             每当用户（任意用户）登录的时候，任务就运行。可以指定日期，或在下次用户登录的时候运行任务。
    ONIDLE              只要系统空闲了指定的时间，任务就运行。可以指定日期，或在下次系统空闲的时候运行任务。
  
### /mo modifier
__指定任务在其计划类型内的运行频率。这个参数对于 MONTHLY 计划是必需的。对于 MINUTE、HOURLY、DAILY 或 WEEKLY 计划，这个参数有效，但也可选。默认值为 1。计划类型 修饰符 说明__

    MINUTE      1 ～ 1439     任务每 n 分钟运行一次。
    HOURLY      1 ～ 23       任务每 n 小时运行一次。
    DAILY       1 ～ 365      任务每 n 天运行一次。
    WEEKLY      1 ～ 52       任务每 n 周运行一次。
    MONTHLY     1 ～ 12       任务每 n 月运行一次。
    LASTDAY                   任务在月份的最后一天运行。
    FIRST、SECOND、THIRD、FOURTH、LAST     与 /d day 参数共同使用,并在特定的周和天运行任务。例如，在月份的第三个周三。
###  /d dirlist
    指定周或月的一天。只与 WEEKLY 或 MONTHLY 计划共同使用时有效。计划类型 日期值
    WEEKLY     可选项。有效值是 MON ~ SUN 和 * （每一天）。MON 是默认值。
    MONTHLY     在使用 FIRST、SECOND、THIRD、FOURTH 或 LAST 修饰符 (/mo) 时，需要 MON ～ SUN 中的某个值。1 ～ 31 是可选的，只在没有修饰符或修饰符为 1 ～ 12 类型时有效。默认值是 1 （月份的第一天）。
    
### /m month[,month...]
    指定一年中的一个月。有效值是 JAN ～ DEC 和 * （每个月）。/m 参数只对于 MONTHLY 计划有效。在使用 LASTDAY 修饰符时，这个参数是必需的。否则，它是可选的，默认值是 * （每个月）。
    
### /i InitialPageFileSize
    指定任务启动之前计算机空闲多少分钟。键入一个 1 ～ 999 之间的整数。这个参数只对于 ONIDLE 计划有效，而且是必需的。
    
### /st StartTime
    以 HH:MM:SS 24 小时格式指定时间。默认值是命令完成时的当前本地时间。/st 参数只对于 MINUTE、HOURLY、DAILY、WEEKLY、MONTHLY 和 ONCE 计划有效。它只对于 ONCE 计划是必需的。
    
### /sd StartDate
    以 MM/DD/YYYY 格式指定任务启动的日期。默认值是当前日期。/sd 参数对于所有的计划有效，但只对于 ONCE 计划是必需的。
    
### /ed EndDate
    指定任务计划运行的最后日期。此参数是可选的。它对于 ONCE、ONSTART、ONLOGON 或 ONIDLE 计划无效。默认情况下，计划没有结束日期。
    
### /s Computer
    指定远程计算机的名称或 IP 地址（带有或者没有反斜杠）。默认值是本地计算机。
    
### /u [domain\]user
    使用特定用户帐户的权限运行命令。默认情况下，使用已登录到运行 SchTasks 的计算机上的用户的权限运行命令。
    
### /p password
    指定在 /u 参数中指定的用户帐户的密码。如果使用 /u 参数，则需要该参数。
    
### /ru {[Domain\]User | "System"}
    使用指定用户帐户的权限运行任务。默认情况下，使用用户登录到运行 SchTasks 的计算机上的权限运行任务。值 说明
    [domain\}User?     指定用户帐户。
    "System" 或 ""     指定操作系统使用的 NT Authority\System 帐户。
### /p Password
    指定用户帐户的密码，该用户帐户在 /u 参数中指定。如果在指定用户帐户的时候忽略了这个参数，SchTasks.exe 会提示您输入密码而且不显示键入的文本。使用 NT Authority\System 帐户权限运行的任务不需要密码，SchTasks.exe 也不会提示索要密码。
    
### /?
    在命令提示符显示帮助。

## 注释

    * XOX SchTasks.exe 不验证程序文件的位置或用户帐户密码。如果没有为用户帐户输入正确的文件位置或正确的密码，任务仍然可以创建，但不会运行。另外，如果帐户的密码更改或过 期，而且没有更改存储在任务中的密码，那么任务也不会运行。
    * NT Authority\System 帐户没有交互式登录权限。用户看不到以系统权限运行的程序，不能与之交互。
    * 每个任务只运行一个程序。但是，可以创建一个批处理文件来启动多个任务，然后计划一个任务来运行该批处理文件。
    * 只要创建了任务就可对其测试。使用 run 操作来测试任务，然后从 SchedLgU.txt 文件 ( Systemroot\SchedLgU.txt ) 中查阅错误。

__每个计划类型的语法和范例。

__若要查看该命令语法，请单击以下命令：

### schtasks create minute
__语法

    schtasks /create /tn TaskName /tr TaskRun /sc minute [/mo {1 - 1439}] [/st StartTime] [/sd StartDate] [/ed EndDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]
_范例_
__计划任务每 20 分钟运行一次。__

__下面的命令计划安全脚本 Sec.vbs 每 20 分钟运行一次。由于命令没有包含起始日期或时间，任务在命令完成 20 分钟后启动，此后每当系统运行它就每 20 分钟运行一次。请注意，安全脚本源文件位于远程计算机上，但任务在本地计算机上计划并执行。__

    schtasks /create /sc minute /mo 20 /tn "Security Script" /tr \\central\data\scripts\sec.vbs

__作为响应，SchTasks.exe 显示一条消息来说明任务会以当前用户的权限运行并需要当前用户的密码。输入密码时，SchTasks.exe 不显示键入的文本。

    The task will be created under current logged-in user name. Please enter the password ************

__然后 SchTasks.exe 显示一条消息表明已计划该任务：
成功：计划任务 "Security Script" 已成功创建。

#### 查询显示命令计划的任务：

    TaskName                  Next Run Time            Status ========================= ======================== ============== Security Script           10:50:00 AM , 4/4/2001     

### schtasks create hourly
_语法

    schtasks /create /tn TaskName /tr TaskRun /sc hourly [/mo {1 - 365}] [/st StartTime] [/sd StartDate] [/ed EndDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]

_范例
__计划命令在每小时过五分的时候运行。__

__下面的命令将计划 MyApp 程序从午夜过后五分钟起每小时运行一次。因为忽略了 /mo 参数，命令使用了小时计划的默认值，即每 (1) 小时。如果该命令在 12:05 A.M 之后生成，程序将在第二天才会运行。__

    schtasks /create /sc hourly /st 00:05:00 /tn "My App" /tr c:\apps\myapp.exe
    
__计划命令每五小时运行一次

__下面的命令计划 MyApp 程序从 2001 年 3 月的第一天起每五小时运行一次。它使用 /mo 参数来指定间隔时间，使用 /sd 参数来指定起始日期。由于命令没有指定起始时间，当前时间被用作起始时间。

    schtasks /create /sc hourly /mo 5 /sd 03/01/2001 /tn "My App" /tr c:\apps\myapp.exe

### schtasks create daily
_语法

    schtasks /create /tn TaskName /tr TaskRun /sc daily [/mo {1 - 365}] [/st StartTime] [/sd StartDate] [/ed EndDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]
    
_范例
__计划任务每天运行一次

__下面的范例计划 MyApp 程序在每天的 8:00 A.M. 运行一次，直到 2001 年 12 月 31 日结束。由于它忽略了 /mo 参数，所以使用默认间隔 1 来每天运行命令。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc daily /st 08:00:00 /ed 12/31/2001
__计划任务每隔一天运行一次

__下面的范例计划 MyApp 程序从 2001 年 12 月 31 日起每隔一天在 1:00 P.M. (13:00) 运行。命令使用 /mo 参数来指定两 (2) 天的间隔。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc daily /mo 2 /st 13:00:00 /sd 12/31/2001

### schtasks create weekly
_语法

    schtasks /create /tn TaskName /tr TaskRun /sc weekly [/d {MON - SUN | *}] [/mo {1 - 52}] [/st StartTime] [/sd StartDate] [/ed EndDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]
_范例
__计划任务每六周运行一次

__下面的命令计划 MyApp 程序在远程计算机上每六周运行一次。该命令使用 /mo 参数来指定间隔。它也使用 /s 参数来指定远程计算机，使用 /ru 参数来计划任务以用户的 Administrator 帐户权限运行。因为忽略了 /rp 参数，SchTasks.exe 会提示用户输入 Administrator 帐户密码。

__另外，因为命令是远程运行的，所以命令中所有的路径，包括到 MyApp.exe 的路径，都是指向远程计算机上的路径。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc weekly /mo 6 /s Server16 /ru Admin01
__计划任务每隔一周在周五运行

__下面的命令计划任务每隔一周在周五运行。它使用 /mo 参数来指定两周的间隔，使用 /d 参数来指定是一周内的哪一天。如计划任务在每个周五运行，要忽略 /mo 参数或将其设置为 1。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc weekly /mo 2 /d FRI

### schtasks create monthly
_语法

__常规月计划语法__

    schtasks /create /tn TaskName /tr TaskRun /sc monthly [/mo {FIRST | SECOND | THIRD | FOURTH | LAST | LASTDAY] [/d {MON - SUN | 1 - 31}] [/m {JAN - DEC[,JAN - DEC...] | *}] [/st StartTime] [/sd StartDate] [/ed EndDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]
    
__指定周的语法__

    schtasks /create /tn TaskName /tr TaskRun /sc monthly /mo {FIRST | SECOND | THIRD | FOURTH | LAST} /d {MON - SUN} [/m {JAN - DEC[,JAN - DEC...] | *}] [/st StartTime] [/sd StartDate] [/ed EndDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]
    
__Lastday 语法__

    schtasks /create /tn TaskName /tr TaskRun /sc monthly /mo LASTDAY /m {JAN - DEC[,JAN - DEC...] | *} [/st StartTime] [/sd StartDate] [/ed EndDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]
    
__指定日期的语法__

    schtasks /create /tn TaskName /tr TaskRun /sc monthly /d {1 - 31} [/m {JAN - DEC[,JAN - DEC...] | *}] [/st StartTime] [/sd StartDate] [/ed EndDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]
    

_范例
__计划任务在每月的第一天运行

__下面的命令计划 MyApp 程序在每月的第一天运行。因为默认修饰符是 none（即：没有修饰符），默认天是第一天，默认的月份是每个月，所以该命令不需要任何其它的参数。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc monthly
    
__计划任务在每月的最后一天运行

__下面的命令计划 MyApp 程序在每月的最后一天运行。它使用 /mo 参数指定在每月的最后一天运行程序，使用通配符 (*) 与 /m 参数表明在每月的最后一天运行程序。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc monthly /mo lastday /m *
    
__计划任务每三个月运行一次

__下面的命令计划 MyApp 程序每三个月运行一次。.它使用 /mo 参数来指定间隔。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc monthly /mo 3
    
__计划任务在每月的第二个周日运行

__下面的命令计划 MyApp 程序在每月的第二个周日运行。它使用 /mo 参数指定是每月的第二周，使用 /d 参数指定天。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc monthly /mo SECOND /d SUN
    
__计划任务在五月和六月的第 15 天运行。

__下面的命令计划 MyApp 程序在五月 15 日和六月 15 日的 3:00 PM (15:00) 运行。它使用 /d 参数来指定日期，使用 /m 参数指定月份。它也使用 /st 参数来指定开始时间。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc monthly /d 15 /m MAY,JUN /st 15:00:00

### schtasks create once
语法

    schtasks /create /tn TaskName /tr TaskRun /sc once /st StartTime /sd StartDate [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]
范例
__计划任务运行一次

__下面的命令计划 MyApp 程序在 2002 年 1 月 1 日午夜运行一次。它使用 /ru 参数指定以用户的 Administrator 帐户权限运行任务，使用 /rp 参数为 Administrator 帐户提供密码。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc once /st 00:00:00 /sd 01/01/2002 /ru Admin23 /rp p@ssworD1

### schtasks create onstart
语法

    schtasks /create /tn TaskName /tr TaskRun /sc onstart [/sd StartDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]
    
范例
__计划任务在每次系统启动的时候运行

__下面的命令计划 MyApp 程序在每次系统启动的时候运行，起始日期是 2001 年 3 月 15 日。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc onstart /sd 03/15/2001

### schtasks create onlogon
语法

    schtasks /create /tn TaskName /tr TaskRun /sc onlogon [/sd StartDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]
    
范例
__计划任务在用户登录到远程计算机的时候运行

__下面的命令计划批处理文件在用户（任何用户）每次登录到远程计算机上的时候运行。它使用 /s 参数指定远程计算机。因为命令是远程的，所以命令中所有的路径，包括批处理文件的路径，都指定为远程计算机上的路径。

    schtasks /create /tn "Start Web Site" /tr c:\myiis\webstart.bat /sc onlogon /s Server23

### schtasks create onidle
语法

    schtasks /create /tn TaskName /tr TaskRun /sc onidle /iIdleTime [/sd StartDate] [/s computer [/u [domain\]user /p password]] [/ru {[Domain\]User | "System"} [/rp Password]]
范例
__计划某项任务在计算机空闲的时候运行

__下面的命令计划 MyApp 程序在计算机空闲的时候运行。它使用必需的 /i 参数指定在启动任务之前计算机必需持续空闲十分钟。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc onidle /i 10
### 更多范例

__若要查看范例，请单击范例名称：

__创建以 System 权限运行的任务

__下面的命令计划 MyApp 程序以 NT Authority\System 帐户权限运行。在这个范例中，任务计划在每月的第一天运行，但对于以系统权限运行的任务可以使用所有的计划类型。

__该命令使用 /ru "System" 参数指定系统安全上下文。因为系统任务不需要密码，所以忽略了 /rp 参数。

    schtasks /create /tn "My App" /tr c:\apps\myapp.exe /sc monthly /d 1 /ru "System"

__作为响应，SchTasks.exe 显示一个信息性消息和一个成功消息。它不提示输入密码。

_信息：此任务将被创建于用户名下 ("NT AUTHORITY\SYSTEM")。 成功：计划任务 "My App" 已成功创建。

## 创建运行多个程序的任务

__每个任务只能运行一个程序。但是可以创建一个运行多个程序的批处理文件，然后计划一个任务来运行该批处理文件。下面的过程说明了这个方法：

  1. 创建一个启动要运行程序的批处理文件。

    在这个范例中创建了一个启动“事件查看器”(Eventvwr.exe) 和“系统监视器”(Perfmon.exe) 的批处理文件。
    * 启动文本编辑器，例如“记事本”。
     * 键入每个程序的名称和指向可执行文件的完全合格的路径。在这种情况下，文件包含有下列语句。

         C:\Windows\System32\Eventvwr.exe
         C:\Windows\System32\Perfmon.exe
    * 将文件存储为 MyApps.bat。
2. 使用 SchTasks.exe 创建一个运行 MyApps.bat 的任务。

      __下面的命令创建了 Monitor 任务，每当有人登录它就运行。它使用 /tn 参数命名任务，使用 /tr 参数运行 MyApps.bat。它使用 /sc 参数来指明 OnLogon 计划类型，使用 /ru 参数指定 Administrator 帐户。__

    schtasks /create /tn Monitor /tr C:\MyApps.bat /sc onlogon /ru Reskit\Administrator

该命令的结果是，每当用户登录到计算机，任务就启动“事件查看器”和“系统监视器”。

__更改计划任务

__更改一个或多个下列任务属性。

    * 任务运行的程序 (/tr)。
    * 任务运行的用户帐户 (/ru)。
    * 用户帐户的密码 (/rp)。

__语法

schtasks /change /tn TaskName [/s computer [/u [domain\]user /p password]] [/tr TaskRun] [/ru [Domain\]User | "System"] [/rp Password]
参数

### /tn TaskName
    标识要更改的任务。输入任务名。
### /s Computer
    指定远程计算机的名称或 IP 地址（带有或者没有反斜杠）。默认值是本地计算机。
### /u [domain\]user
    使用特定用户帐户的权限运行命令。默认情况下，使用已登录到运行 SchTasks 的计算机上的用户的权限运行命令。
### /p password
    指定在 /u 参数中指定的用户帐户的密码。如果使用 /u 参数，则需要该参数。
### /tr TaskRun
    更改任务运行的程序。输入可执行文件、脚本文件或批处理文件的完全合格的路径和文件名。如果忽略了路径，SchTasks.exe 假定文件在 Systemroot\System32 目录下指定的程序替换任务最初运行的程序。
### /ru [Domain\]User | "System"
    更改用于任务的用户帐户。值 说明
    [domain\]User     指定用户帐户
    "System" or ""     指定为操作系统所使用的 NT Authority\System 帐户。

    在更改用户帐户的时候，必须也要更改用户密码。如果命令带有 /ru 参数，但没有 /rp 参数，SchTasks.exe 提示要求输入新的密码而且不显示键入的文本。

    任务以不需要密码的 NT Authority\System 帐户权限运行，SchTasks.exe 不会提示输入密码。
### /p Password
    更改用于任务的帐户密码。输入新的密码。
### /?
    在命令提示符显示帮助。

注释

    * XOX /tn 和 /s 参数标识该任务。/tr、/ru 和 /rp 参数指定可以更改的任务属性。
    * 使用 change 操作的命令必须至少更改一个任务属性。
    * NT Authority\System 帐户没有交互式登录权限。用户看不到以系统权限运行的程序，不能与其交互。

范例
__更改任务运行的程序

__下面的命令将 Virus Check 任务运行的程序由 VirusCheck.exe 更改为 VirusCheck2.exe。此命令使用 /tn 参数标识任务，使用 /tr 参数指定任务的新程序。（不能更改任务名称。）

    schtasks /change /tn "Virus Check" /tr C:\VirusCheck2.exe

__作为响应，SchTasks.exe 显示以下成功消息：

__成功：计划任务 "Virus Check" 的参数已更改。

__此命令的结果是，Virus Check 任务现运行 VirusCheck2.exe。
