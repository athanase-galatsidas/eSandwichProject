# eSandwichProject

School project for fullstack web application

---

## Project Dossier

Sand Witches Sandwich Service is een fullstack web project waarmee gebruikers sandwichen kunnen bestellen.

Het doel is om in de frontend bestellingen te kunnen plaatsen. Op onze frontend zullen gebruikers een lijst van beschikbare sandwichen te zien krijgen. Gebruikers kunnen een of meerder sandwichen kiezen, deze customizen *(ingredient toevoegen of afhalen)* en vervolgens een bestelling plaatsen.

De bestelling zal gepost worden naar de backend. Hier zal die worden opgeslagen in een database van order history en zal ook de lijst van ingredienten updaten. Als een ingredient in de database leeg is zullen de sandwichen die deze ingredienten nodig hebben niet meer beschikbaar zijn en zal er een waarschuwing geplaatst worden op de admin page.

Er zal ook ingelogt kunnen worden. Als de ingelogde user een admin is zal hij geredirect worden naar de admin page. Voor gewone users zullen die op een about page een lijst van hun orders te zien krijgen. Voor ingelogde users die bestellingen plaatsen zullen bepaalde velden in de checkout page automatisch ingevuld worden *(zoals adres, payment methods, etc)*.

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
| Frontwerk    | 50 %         | 50 %       |
| Design       | 40 %         | 60 %       |
| Project werk | 60 %         | 40 %       |
|              |              |            |
| Totaal werk  | ~50 %        | ~50 %      |


## Milestones

Gedetaileerde lijst van geplande milestones voor dit project staan op [trello](https://trello.com/b/AwKfylrI/esandwich).

### General
- [ ] Trello in orde brengen

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
- [ ] Menu/Order page
- [ ] Details/Custumize sandwich page
- [ ] Checkout
- [ ] Admin page
