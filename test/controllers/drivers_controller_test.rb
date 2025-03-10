require "test_helper"

class DriversControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get drivers_new_url
    assert_response :success
  end

  test "should get create" do
    get drivers_create_url
    assert_response :success
  end
end
