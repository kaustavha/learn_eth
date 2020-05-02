require "application_system_test_case"

class OptionsTest < ApplicationSystemTestCase
  setup do
    @option = options(:one)
  end

  test "visiting the index" do
    visit options_url
    assert_selector "h1", text: "Options"
  end

  test "creating a Option" do
    visit options_url
    click_on "New Option"

    fill_in "Contract address", with: @option.contract_address
    fill_in "Expires on", with: @option.expires_on
    fill_in "Magic number", with: @option.magic_number
    fill_in "Opt type", with: @option.opt_type
    fill_in "Strike price", with: @option.strike_price
    fill_in "User", with: @option.user_id
    click_on "Create Option"

    assert_text "Option was successfully created"
    click_on "Back"
  end

  test "updating a Option" do
    visit options_url
    click_on "Edit", match: :first

    fill_in "Contract address", with: @option.contract_address
    fill_in "Expires on", with: @option.expires_on
    fill_in "Magic number", with: @option.magic_number
    fill_in "Opt type", with: @option.opt_type
    fill_in "Strike price", with: @option.strike_price
    fill_in "User", with: @option.user_id
    click_on "Update Option"

    assert_text "Option was successfully updated"
    click_on "Back"
  end

  test "destroying a Option" do
    visit options_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Option was successfully destroyed"
  end
end
