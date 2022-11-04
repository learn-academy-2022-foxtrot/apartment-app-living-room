require "rails_helper"

RSpec.describe "Apartments", type: :request do
  let(:user) { User.create email: "test@example.com", password: "password", password_confirmation: "password" }

  # -----index-----
  describe "GET /index" do
    it "gets all the apartments" do
      apartment = user.apartments.new(
        street: "124 Conch Street",
        city: "Bikini Bottom",
        state: "Pacific Ocean",
        manager: "Mustachio Jones",
        email: "mjones@example.com",
        price: "1000 sand dollars",
        bedrooms: 2,
        bathrooms: 2,
        pets: "yes",
        image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
      )
      apartment.save
      get "/apartments"

      apartments = JSON.parse(response.body)
      expect(apartments.length).to eq 1
      expect(response).to have_http_status(200)
      apartment = apartments.first
      expect(apartment["street"]).to eq "124 Conch Street"
      expect(apartment["city"]).to eq "Bikini Bottom"
      expect(apartment["state"]).to eq "Pacific Ocean"
      expect(apartment["manager"]).to eq "Mustachio Jones"
      expect(apartment["email"]).to eq "mjones@example.com"
    end
  end

describe "POST /create" do
  it "creates an apartment listing" do
    apartment_params = {
      apartment: {
        street: "Blender Bottle Blvd",
        city: "Gainsville",
        state: "Florida",
        manager: "Rob Gains",
        email: "gymislife@example.com",
        price: "2,500",
        bedrooms: 3,
        bathrooms: 3,
        pets: "Yes",
        image: "https://img.zumpercdn.com/523001002/1280x960?fit=crop&h=135&w=414",
        user_id: user.id
      }
    }

    post '/apartments', params: apartment_params
    apartments = JSON.parse(response.body)
    apartment = Apartment.first
    expect(response).to have_http_status(200)
    expect(apartment.street).to eq 'Blender Bottle Blvd'
    expect(apartment.city).to eq 'Gainsville'
    expect(apartment.state).to eq 'Florida'
    expect(apartment.manager).to eq 'Rob Gains'
    expect(apartment.email).to eq 'gymislife@example.com'
    expect(apartment.price).to eq '2,500'
    expect(apartment.bedrooms).to eq 3
    expect(apartment.bathrooms).to eq 3
    expect(apartment.pets).to eq 'Yes'
    expect(apartment.image).to eq 'https://img.zumpercdn.com/523001002/1280x960?fit=crop&h=135&w=414'
    end
  end

end