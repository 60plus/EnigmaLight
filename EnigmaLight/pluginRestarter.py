from Plugins.Plugin import PluginDescriptor
import EL_MainMenu
def main(session, **kwargs):
        reload(EL_MainMenu)
        try:
                session.open(EL_MainMenu.EL_Screen_MainMenu)
        except:
                import traceback
                traceback.print_exc()
def Plugins(path, **kwargs):
        return PluginDescriptor(
                name="Enigmalight dev",
                description="Plugin zur Steuerung von Ambilight",
                where=PluginDescriptor.WHERE_PLUGINMENU,
				icon="button.png",
                fnc=main)     			   			