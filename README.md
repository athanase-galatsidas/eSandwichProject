# eSandwichProject

School project for fullstack web application

---

## Project Dossier

Sand Witches Sandwich Service is een fullstack web project waarmee gebruikers sandwiches kunnen bestellen.

Het doel is om in de frontend bestellingen te kunnen plaatsen. Op onze frontend zullen gebruikers een lijst van beschikbare sandwiches te zien krijgen. Gebruikers kunnen een of meerder sandwiches kiezen, deze customizen *(ingrediënt toevoegen of afhalen en soort broodje kiezen)* en vervolgens een bestelling plaatsen.

De bestelling zal gepost worden naar de backend. Hier zal die worden opgeslagen in een database van order history en zal ook de lijst van ingrediënten updaten. Als een ingrediënt in de database leeg is zullen de sandwiches die deze ingrediënten nodig hebben niet meer beschikbaar zijn en zal er een waarschuwing geplaatst worden op de admin page.

Er zal ook ingelogd kunnen worden. Als de ingelogde user een admin is zal hij geredirect worden naar de admin page. Voor gewone users zullen die op een about page een lijst van hun orders te zien krijgen. Voor ingelogde users die bestellingen plaatsen zullen bepaalde velden in de checkout page automatisch ingevuld worden *(zoals adres, payment methods, etc)*.

### 🔑 Nodige paswoorden

|           | User             | Password          |
|-----------|------------------|-------------------|
| Sql Admin | admin            | ```paswoord123``` |
| Sql Root  | root             | ```paswoord1234```|
| Web Admin | docent@howest.be | ```P@ssw0rd```    |


### Geplande Werkverdeling

|              | Athanase     | Tibo       |
|--------------|--------------|------------|
| Backend      | 90 %         | 10 %       |
| Frontend     | 50 %         | 50 %       |
| Design       | 40 %         | 60 %       |
| Project werk | 60 %         | 40 %       |
|              |              |            |
| Totaal werk  | ~50 %        | ~50 %      |

### Uiteidelijke Werkverdeling

|              | Athanase     | Tibo       |
|--------------|--------------|------------|
| Backend      | 95 %         | 5 %        |
| Frontend     | 75 %         | 25 %       |
| Design       | 40 %         | 60 %       |
| Project werk | 70 %         | 30 %       |
|              |              |            |
| Totaal werk  | ~70 %        | ~30 %      |

## 🕐 Milestones

Gedetaileerde lijst van geplande milestones voor dit project staan op [trello](https://trello.com/b/AwKfylrI/esandwich).

### ✔  Gehaalde milestones

- Bestellingen plaatsen met meerdere items
- Realtime updates op tracking page
- Sandwichen zijn wel of niet beschikbaar afhankelijk van ingredient count
- Users kunnen reviews achterlaten
- Mobile versie
- PWA support
- User/Admin login

### ❌ Niet gehaalde milestones

- Sandwichen aanpassen (ingredienten toevoegen)
- User accounts hebben geen nuttige functionaliteit
- Kubernetis deployment

### ☑ Checklist

#### Backend
- [x] Sql Database
- [x] Docker
- [x] Graphql Api
- [ ] Kubernatis
- [x] User authentication
- [x] Ingredient count
- [x] Process orders
- [x] Socket

#### Frontend
- [x] Basic frontend design (zie [figma](https://www.figma.com/file/d2dDQDZkVPz6MLHEAYZQXa/Untitled?node-id=0%3A1))
- [x] Front page
- [x] Menu/Order page
- [x] Details/Customize sandwich page
- [x] Checkout
- [x] Tracking
- [x] Admin page

## Toekomst

In de toekomst zouden we de Admin page nog wat kunnen uitbrijden. Momenteel dient deze pagina meer als een overzicht dan als effectieve dashboard.

We zouden ook user accounts meer nut geven. We zouden kunnen zorgen dat users hun order history kunnen zien en gemakelijker hun favoriete sandwiches kunnen bestellen.

## Ervaring

Het moeilijkste deel van dit project was de planning. Het begon goed maar tegen het einde liep het in het 100.

Werkverdeling kon ook wat beter.

We zouden heel wat problemen vermeden hebben als we onze devops flow iets vroeger in orde gekregen hadden.
