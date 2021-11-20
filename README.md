# eSandwichProject

School project for fullstack web application

---

## Project Dossier

Sand Witches Sandwich Service is een fullstack web project waarmee gebruikers sandwiches kunnen bestellen.

Het doel is om in de frontend bestellingen te kunnen plaatsen. Op onze frontend zullen gebruikers een lijst van beschikbare sandwiches te zien krijgen. Gebruikers kunnen een of meerder sandwiches kiezen, deze customizen *(ingrediënt toevoegen of afhalen en soort broodje kiezen)* en vervolgens een bestelling plaatsen.

De bestelling zal gepost worden naar de backend. Hier zal die worden opgeslagen in een database van order history en zal ook de lijst van ingrediënten updaten. Als een ingrediënt in de database leeg is zullen de sandwiches die deze ingrediënten nodig hebben niet meer beschikbaar zijn en zal er een waarschuwing geplaatst worden op de admin page.

Er zal ook ingelogd kunnen worden. Als de ingelogde user een admin is zal hij geredirect worden naar de admin page. Voor gewone users zullen die op een about page een lijst van hun orders te zien krijgen. Voor ingelogde users die bestellingen plaatsen zullen bepaalde velden in de checkout page automatisch ingevuld worden *(zoals adres, payment methods, etc)*.

### Nodige paswoorden

| User      | Password          |
|-----------|-------------------|
| Sql Admin | ```paswoord123``` |
| Web Admin | ```paswoord123``` |
| Sql Root  | ```paswoord1234```|


### Werkverdeling

|              | Athanase     | Tibo       |
|--------------|--------------|------------|
| Backend      | 90 %         | 10 %       |
| Frontend     | 50 %         | 50 %       |
| Design       | 40 %         | 60 %       |
| Project werk | 60 %         | 40 %       |
|              |              |            |
| Totaal werk  | ~50 %        | ~50 %      |


## Milestones

Gedetaileerde lijst van geplande milestones voor dit project staan op [trello](https://trello.com/b/AwKfylrI/esandwich).

### General
- [x] Trello in orde brengen

### Backend
- [x] Database
- [x] Docker setup
- [ ] Api
- [ ] User authentication
- [ ] Process orders
- [ ] Keep check of ingredient count

### Frontend
- [x] Basic frontend design (zie [figma](https://www.figma.com/file/d2dDQDZkVPz6MLHEAYZQXa/Untitled?node-id=0%3A1))
- [x] Front page
- [x] Menu/Order page
- [ ] Details/Custumize sandwich page
- [x] Checkout
- [x] Admin page
