## Діаграма прецедентів

@startuml

skinparam actorStyle awesome

'User

(MCUS1\nРеєстрація) as (MCUS1)

(MCUS2\nАвторизація) as (MCUS2)

(MCUS3\nПошук данних) as (MCUS3)

(MCUS4\nЕкспорт даних за ідентифікатором) as (MCUS4)

(MCUS5\nЗвернення за допомогою до системи) as (MCUS5)


User --> (MCUS1)

User -up-> (MCUS2)

User -left-> (MCUS3)

User --> (MCUS4)

User --> (MCUS5)

Admin -up-|> User

Admin --> (MCUA1)

Admin --> (MCAS1)

Admin --> (MCAS2)

Admin --> (MCAS3)

'Admin

(MCUA1\nОбробка запиту користувача) as (MCUA1)

(MCAS1\nДодання нових \nджерел інформації) as (MCAS1)

(MCAS2\nЗапит на статистику \nзапитів користувачів) as (MCAS2)

(MCAS3\nРедагування форми \nдля користувачів)  as (MCAS3)

@enduml

[(переглянути uml код діаграм)](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/use%20cases/README.md)


## Сценарії використання системи

### [**ID:** MCUS1](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus1)
    
**НАЗВА:** Реєстрація нового користувача

**УЧАСНИКИ:** Користувач, система

**ПЕРЕДУМОВИ:** Користувач не має облікового запису

**РЕЗУЛЬТАТ:** Отримання власного аккаунту і доступу до нього

**ВИКЛЮЧНІ СИТУАЦІЇ:**
* Аккаунт з даними для реєстрації вже існує (код помилки: mcus1_ex1)

**ОСНОВНИЙ СЦЕНАРІЙ:**

@startuml

|Користувач|
start
: натискає кнопку реєстрації;
|Система|
:отримує запит на реєстрації;
:надсилає форму для реєстрації;
|Користувач| 
:наводить свої логін, пароль та електронну пошту;
:натискає кнопку для відправки системі своїх даних;
|Система| 
:отримує дані для реєстрації;
note right #ffaaaa
<b> mcus1_ex1 Аккаунт з даними
<b> для реєстрації вже існує
end note
:створює обліковий запис на цього користувача;
:надсилає повідомлення про успішну реєстрацію;
|Користувач|
stop

@enduml

### [**ID:** MCUS2](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus2)

**НАЗВА:** Авторизація зареєстрованого користувача

**УЧАСНИКИ:** Користувач, система

**ПЕРЕДУМОВИ:** Користувач має зареєстрований обліковий запис

**РЕЗУЛЬТАТ:** Отримання доступ до існуючого аккаунту

**ВИКЛЮЧНІ СИТУАЦІЇ:**
* Аккаунт з даними для авторизації не існує (код помилки: mcus2_ex1)

**ОСНОВНИЙ СЦЕНАРІЙ:**

@startuml

|Користувач|
start
:натискає на кнопку авторизації;
|Система|
:надсилає користувачу форму для вводу логіна та пароля;
|Користувач| 
:вводить свої логін та пароль у форму;
:надсилає системі свої дані;
|Система| 
:проводить валідацію даних користувача;
note right #ffaaaa
<b> mcus2_ex1 Аккаунт з даними
<b> для авторизації не існує
end note
:надає користувачу доступ до акаунту;;
|Користувач|
:отримує доступ;
stop

@enduml

### [**ID:** MCUS3](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus3)

**НАЗВА:** Користувач здійснює запит до системи аналізу медіа контенту

**УЧАСНИКИ:** Користувач, система

**ПЕРЕДУМОВИ:** Користувач виконав авторизацію в системі

**РЕЗУЛЬТАТ:** Виконання системою збору інформації

**ВИКЛЮЧНІ СИТУАЦІЇ:**
* Система не змогла розпізнати запит користувача (код помилки: mcus3_ex1)

**ОСНОВНИЙ СЦЕНАРІЙ:**

@startuml

|Користувач|
start
:натискає кнопку пошуку(запиту даних);
|Система|
:надає користувачу форму з фільтрами;
|Користувач| 
:обирає певні пункти з фільтру;
|Система|
:обробляє запит користувача за вказаними фільтрами;
:надає користувачу форму для вводу періоду;
|Користувач|
:вказує період (проміжок часу) \nз якого необхідно здійснювати пошук;
|Система|
:аналізує проміжок часу, вказаний користувачем;
:проводить валідацію отриманого запиту;
note right #ffaaaa
<b> mcus3_ex1 Система не змогла
<b> розпізнати запит користувача
end note
:виконує остаточний збір інформації за запитом;
:надсилає користувачу кінцевий результат;
|Користувач|
stop

@enduml

### [**ID:** MCUS4](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus4)

**НАЗВА:** Експорт результатів роботи системи

**УЧАСНИКИ:** Користувач, система

**ПЕРЕДУМОВИ:** Користувач отримав результати запиту та звіт з його обробки

**РЕЗУЛЬТАТ:** Користувач отримує файл з результатами роботи системи

**ВИКЛЮЧНІ СИТУАЦІЇ:**
* Система не змогла розпізнати ідентифікатор зі звіту користувача (код помилки: mcus4_ex1)

**ОСНОВНИЙ СЦЕНАРІЙ:**
  
@startuml
  
|Користувач|
start
:вводить ідентифікатор зі звіту до системи;
|Система|
:аналізує отриманий ідентифікатор;
note right #ffaaaa
<b> mcus4_ex1 Система не змогла розпізнати
<b> ідентифікатор зі звіту користувача
end note
:виконує пошук за заданим ідентифікатором;
:надає користувачу вибір формату файла для експорту;
|Користувач| 
:обирає бажаний формат файла для експорту;
:надсилає системі обраний формат файла;
|Система|
:завантажує необхідні дані і надає користувачу файл для експорту;
|Користувач|
:завантажує файл;
stop

@enduml

### [**ID:** MCUS5](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcus5)

**НАЗВА:** Користувач звертається до системи за допомогою 

**УЧАСНИКИ:** Користувач, система

**ПЕРЕДУМОВИ:** Користувач виконав авторизацію в системі

**РЕЗУЛЬТАТ:** Користувач отримує необхідну інформацію про роботу з системою

**ВИКЛЮЧНІ СИТУАЦІЇ:**
* системі не вдалось ідентифікувати запит користувача (код помилки: mcus5_ex1)

**ОСНОВНИЙ СЦЕНАРІЙ:**
  
@startuml
  
|Користувач|
start
:натискає на кнопку допомоги;
|Система| 
:надає користувачу форму для заповнення;
|Користувач|
:отримує форму;
:вписує текст свого питання;
:надсилає заповнену форму системі;
|Система| 
:за ключовими словами аналізує проблему користувача;
note right #ffaaaa
<b> mcus4_ex1 Системі не вдалось
<b> ідентифікувати запит користувача
end note
:надсилає користувачу необхідну довідку \nпро роботу з функціоналом системи;
|Користувач|
:отримує довідку та ознайомлюється з нею;
stop

@enduml

### [**ID:** MCUA1](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcua1)

**НАЗВА:** Користувач звертається до адміністратора

**УЧАСНИКИ:** Користувач, адміністратор

**ПЕРЕДУМОВИ:** Користувач виконав авторизацію в системі

**РЕЗУЛЬТАТ:** Адміністратор допомагає користувачу

**ВИКЛЮЧНІ СИТУАЦІЇ:**
* Користувач не зміг зв'язатися з адміністратором (код помилки: mcua1_ex1)

**ОСНОВНИЙ СЦЕНАРІЙ:**

@startuml

|Користувач|
start
:натискає на кнопку зворотного зв'язку;
|Адміністратор| 
:надсилає користувачу форму для запиту;
note right #ffaaaa
<b> mcua1_ex1 Користувач не зміг
<b> зв'язатися з адміністратором
end note
|Користувач|
:вказує причину звернення і описує проблему;
:надсилає запит адміністратору;
|Адміністратор| 
:отримує повідомлення користувача;
:шукає відповідь на питання користувача;
:надсилає відповідь користувачу;
|Користувач|
:отримує відповідь;
stop

@enduml

### [**ID:** MCAS1](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcas1)

**НАЗВА:** Адміністратор додає до системи нові джерела інформації

**УЧАСНИКИ:** Адміністратор, система

**ПЕРЕДУМОВИ:** Адміністратор має необхідні права доступу

**РЕЗУЛЬТАТ:** Система отримує нові джерела інформації

**ВИКЛЮЧНІ СИТУАЦІЇ:**
* Додані джерела не пройшли валідацію (код помилки: mcas1_ex1)

**ОСНОВНИЙ СЦЕНАРІЙ:**

@startuml

|Адміністратор|
start
:натискає кнопку для додання нових джерел інформації;
|Система|   
:надає йому форму для посилання на нове джерело інформації;
|Адміністратор| 
:надає посилання та короткий опис;
|Система|   
:перевіряє валідність посилання;
note right #ffaaaa
<b> mcas2_ex1 Додані джерела не
<b> пройшли валідацію
end note
|Система|   
:надає форму для налаштування фільтрів;
|Адміністратор| 
:залишає фільтри, за якими можна знайти джерело;
|Система|   
:додає нове джерело;
stop

@enduml

### [**ID:** MCAS2](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcas2)

**НАЗВА:** Адміністратор робить запит на статистику запитів користувачів

**УЧАСНИКИ:** Адміністратор, система

**ПЕРЕДУМОВИ:** Адміністратор має необхідні права доступу

**РЕЗУЛЬТАТ:** Адміністратор публікує статистику

**ВИКЛЮЧНІ СИТУАЦІЇ:**
* Система не змогла знайти запити за обраний проміжок часу (код помилки: mcas2_ex1)

**ОСНОВНИЙ СЦЕНАРІЙ:**

@startuml

|Адміністратор|
start
:натискає на кнопку статистики;
:обирає проміжок часу який хочу проаналізувати;
:робить запит на статистику за обраний проміжок часу;
|Система|   
:отримує запит;
:виконує пошук даних за вказаний час;
note right #ffaaaa
<b> mcas2_ex1 Система не змогла знайти
<b> запити за обраний проміжок часу
end note
:надає дані адміністратору;
|Адміністратор| 
:отримує знайдені дані;
:впорядковує запити користувачів;
:будує графіки і таблиці на основі цих даних;
:публікує статистику;
stop

@enduml

### [**ID:** MCAS3](https://github.com/YaroslavEls/media-content-analyzing-system/blob/master/docs/requirements/stakeholders-needs.md#id-mcas3)

**НАЗВА:** Адміністратор робить запит на зміну форми

**УЧАСНИКИ:** Адміністратор, система

**ПЕРЕДУМОВИ:** Адміністратор має необхідні права доступу

**РЕЗУЛЬТАТ:** Система зберігає нову конфігурацію форми

**ВИКЛЮЧНІ СИТУАЦІЇ:**
* Форма запитана адміністраторам не знайдена (код помилки: mcas3_ex1)

**ОСНОВНИЙ СЦЕНАРІЙ:**

@startuml

|Адміністратор|
start
:переходить на стрінку редагування форм;
:обирає необхідну форму;
|Система|   
:отримує запит на зміну форми;
note right #ffaaaa
<b> mcas3_ex1 Форма запитана
<b> адміністратором не знайдена
end note
:надає доступ до зміни форми;
|Адміністратор| 
:редагує фільтри;
:надсилає змінену форму;
|Система|   
:отримує змінену форму;
:зберігає зміни;
|Адміністратор| 
:перевіряє нові зміни на справність;
stop

@enduml
