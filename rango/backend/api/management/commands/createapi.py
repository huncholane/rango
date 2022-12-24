from django.core.management.base import BaseCommand, CommandError, CommandParser
from django.template.loader import render_to_string
from django.utils.html import strip_tags
import os


class Command(BaseCommand):
    # Show this when the user types help
    help = "Creates a new API. Usage: python manage.py createapi api_name [root_dir]"

    def add_arguments(self, parser: CommandParser) -> None:
        parser.add_argument('api_name', type=str, help='The name of the API model')
        parser.add_argument('root_dir', type=str, nargs='?', default='api', help='The root directory for the API model. Defaults to "api"')

    def handle(self, *args, **options):
        # Get the api name from the first argument
        api_name = options['api_name'].lower()
        model_name = api_name.capitalize()
        api_name += 's'
        # Get the root directory
        root_dir = options['root_dir'].lower()
        # Create context for the templates
        context = {
            'api_name': api_name,
            'root_dir': root_dir,
        }
        # If the api model does not exist raise a CommandError
        try:
            # Test if the model exists
            getattr(__import__(root_dir).models, model_name)
        except:
            raise CommandError(f"Model {model_name} does not exist")
        # If the root directory does not exist raise a CommandError
        if not os.path.exists(root_dir):
            raise CommandError(f"Directory {root_dir} does not exist")
        # Create the api directory
        api_dir = os.path.join(root_dir, api_name)
        os.makedirs(api_dir, exist_ok=True)
        # Load the viewset template and write it to the views file
        views_file = os.path.join(api_dir, 'views.py')
        with open(views_file, 'w') as f:
            f.write(strip_tags(render_to_string('api/viewset.html', context)))
        # Load the serializers template and write it to the serializers file
        serializers_file = os.path.join(api_dir, 'serializers.py')
        with open(serializers_file, 'w') as f:
            f.write(strip_tags(render_to_string('api/serializers.html', context)))
        self.stdout.write(self.style.SUCCESS(f"Successfully created API {api_name}"))